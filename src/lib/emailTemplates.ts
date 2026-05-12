export const emailTemplates = {
  welcomeEmail: (name: string) => `
    <div style="background:#071126;color:#fff;font-family:Arial,sans-serif;padding:40px;">
      <div style="max-width:680px;margin:0 auto;background:#0a1a2e;border:1px solid rgba(212,175,55,.18);border-radius:24px;overflow:hidden;">
        <div style="padding:40px 32px;background:#0f263f;">
          <h1 style="margin:0;font-size:32px;color:#d4af37;">Welcome to CityServices, ${name}!</h1>
          <p style="margin:16px 0 0;color:#cbd5e1;line-height:1.7;">Your Moroccan marketplace for trusted local services is ready.</p>
        </div>
        <div style="padding:32px;background:#071126;">
          <p style="color:#fff;margin:0 0 24px;">You can now search for top-rated businesses, manage your profile, and connect with customers or services across Moroccan cities.</p>
          <a href="https://yourdomain.com/login" style="display:inline-block;padding:14px 24px;background:#d4af37;color:#071126;border-radius:14px;font-weight:700;text-decoration:none;">Sign in to your dashboard</a>
        </div>
        <div style="padding:24px 32px;background:#0a1a2e;color:#94a3b8;font-size:14px;">CityServices • Moroccan local services marketplace</div>
      </div>
    </div>
  `,

  verifyAccountEmail: (name: string, verifyUrl: string) => `
    <div style="background:#071126;color:#fff;font-family:Arial,sans-serif;padding:40px;">
      <div style="max-width:680px;margin:0 auto;background:#0a1a2e;border:1px solid rgba(212,175,55,.18);border-radius:24px;overflow:hidden;">
        <div style="padding:40px 32px;background:#0f263f;">
          <h1 style="margin:0;font-size:32px;color:#d4af37;">Verify your CityServices account</h1>
          <p style="margin:16px 0 0;color:#cbd5e1;line-height:1.7;">Hello ${name}, click the button below to confirm your email and unlock full access.</p>
        </div>
        <div style="padding:32px;background:#071126;">
          <a href="${verifyUrl}" style="display:inline-block;padding:14px 24px;background:#d4af37;color:#071126;border-radius:14px;font-weight:700;text-decoration:none;">Verify my email</a>
        </div>
        <div style="padding:24px 32px;background:#0a1a2e;color:#94a3b8;font-size:14px;">If you did not create an account, you can safely ignore this message.</div>
      </div>
    </div>
  `,

  forgotPasswordEmail: (name: string, resetUrl: string) => `
    <div style="background:#071126;color:#fff;font-family:Arial,sans-serif;padding:40px;">
      <div style="max-width:680px;margin:0 auto;background:#0a1a2e;border:1px solid rgba(212,175,55,.18);border-radius:24px;overflow:hidden;">
        <div style="padding:40px 32px;background:#0f263f;">
          <h1 style="margin:0;font-size:32px;color:#d4af37;">Reset your password</h1>
          <p style="margin:16px 0 0;color:#cbd5e1;line-height:1.7;">Hi ${name}, use the button below to create a new password for your CityServices account.</p>
        </div>
        <div style="padding:32px;background:#071126;">
          <a href="${resetUrl}" style="display:inline-block;padding:14px 24px;background:#d4af37;color:#071126;border-radius:14px;font-weight:700;text-decoration:none;">Reset password</a>
        </div>
        <div style="padding:24px 32px;background:#0a1a2e;color:#94a3b8;font-size:14px;">If you did not request a reset, no action is needed.</div>
      </div>
    </div>
  `,

  businessApprovedEmail: (businessName: string, dashboardUrl: string) => `
    <div style="background:#071126;color:#fff;font-family:Arial,sans-serif;padding:40px;">
      <div style="max-width:680px;margin:0 auto;background:#0a1a2e;border:1px solid rgba(212,175,55,.18);border-radius:24px;overflow:hidden;">
        <div style="padding:40px 32px;background:#0f263f;">
          <h1 style="margin:0;font-size:32px;color:#d4af37;">Business Approved</h1>
          <p style="margin:16px 0 0;color:#cbd5e1;line-height:1.7;">Congratulations! Your business ${businessName} has been approved and is now visible in our marketplace.</p>
        </div>
        <div style="padding:32px;background:#071126;">
          <a href="${dashboardUrl}" style="display:inline-block;padding:14px 24px;background:#d4af37;color:#071126;border-radius:14px;font-weight:700;text-decoration:none;">View your dashboard</a>
        </div>
        <div style="padding:24px 32px;background:#0a1a2e;color:#94a3b8;font-size:14px;">Keep your profile updated for the best visibility.</div>
      </div>
    </div>
  `,

  businessRejectedEmail: (businessName: string) => `
    <div style="background:#071126;color:#fff;font-family:Arial,sans-serif;padding:40px;">
      <div style="max-width:680px;margin:0 auto;background:#0a1a2e;border:1px solid rgba(212,175,55,.18);border-radius:24px;overflow:hidden;">
        <div style="padding:40px 32px;background:#0f263f;">
          <h1 style="margin:0;font-size:32px;color:#d4af37;">Business Review Update</h1>
          <p style="margin:16px 0 0;color:#cbd5e1;line-height:1.7;">We reviewed your listing for ${businessName}. At this time it was not approved. Please update your details and resubmit.</p>
        </div>
        <div style="padding:32px;background:#071126;">
          <p style="margin:0;color:#cbd5e1;">If you have questions, reach out to the CityServices team.</p>
        </div>
        <div style="padding:24px 32px;background:#0a1a2e;color:#94a3b8;font-size:14px;">Thank you for helping us keep the marketplace quality high.</div>
      </div>
    </div>
  `,
};
