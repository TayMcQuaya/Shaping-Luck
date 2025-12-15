/**
 * Supabase Waitlist Integration for Shaping Luck
 *
 * This module handles email collection for the static site.
 * Include the Supabase CDN script before this file.
 */

const SUPABASE_CONFIG = {
  url: 'https://bxkwbvmiymirywfpkcbr.supabase.co',
  anonKey: 'sb_publishable_d9x5WkuvxadYJKfWzusVLg_dLtWptJi'
};

let supabaseClient = null;

function initSupabase() {
  if (typeof supabase === 'undefined') {
    console.error('Supabase library not loaded. Include the CDN script first.');
    return null;
  }

  if (SUPABASE_CONFIG.url === 'YOUR_SUPABASE_PROJECT_URL') {
    console.error('Supabase not configured. Update SUPABASE_CONFIG in supabase-waitlist.js');
    return null;
  }

  if (!supabaseClient) {
    supabaseClient = supabase.createClient(
      SUPABASE_CONFIG.url,
      SUPABASE_CONFIG.anonKey,
      {
        auth: {
          persistSession: false,
          autoRefreshToken: false
        }
      }
    );
  }

  return supabaseClient;
}

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function validateCompanyName(name) {
  return name && name.trim().length >= 1 && name.trim().length <= 100;
}

async function submitWaitlist(email, companyName, source = 'website') {
  const client = initSupabase();

  if (!client) {
    return {
      success: false,
      message: 'Service temporarily unavailable. Please try again later.'
    };
  }

  const normalizedEmail = email.trim().toLowerCase();
  const normalizedCompany = companyName.trim();

  if (!validateEmail(normalizedEmail)) {
    return {
      success: false,
      message: 'Please enter a valid email address.'
    };
  }

  if (!validateCompanyName(normalizedCompany)) {
    return {
      success: false,
      message: 'Please enter your company name.'
    };
  }

  try {
    const { error } = await client
      .from('waitlist_subscribers')
      .insert([{
        email: normalizedEmail,
        company_name: normalizedCompany,
        source: source
      }]);

    if (error) {
      if (error.code === '23505') {
        return {
          success: true,
          message: "You're already on the list! We'll be in touch soon.",
          isDuplicate: true
        };
      }

      console.error('Waitlist submission error:', error);
      return {
        success: false,
        message: 'Something went wrong. Please try again.'
      };
    }

    return {
      success: true,
      message: "You're on the list! We'll notify you when registration opens."
    };

  } catch (err) {
    console.error('Waitlist submission exception:', err);
    return {
      success: false,
      message: 'Something went wrong. Please try again.'
    };
  }
}

window.WaitlistModule = {
  init: initSupabase,
  submit: submitWaitlist,
  validateEmail,
  validateCompanyName
};
