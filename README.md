# Water Tourism Portal — Legacy Static Prototype

This repository contains a static HTML prototype with a login/registration screen, a dashboard, a water-tourism application form, and a CSR proposal page.

## Files

- `index.html` — login page
- `register.html` — registration page
- `dashboard.html` — legacy dashboard with an embedded published Google Sheet and meeting iframe
- `app.html` — water-tourism application form
- `csr.html` — CSR proposal presentation
- `css.css` — shared styles

## Critical security limitations

- Login and registration currently send credentials and personal fields as URL query parameters to a Google Apps Script endpoint. URLs may be retained in browser/network logs. Do not use real passwords or sensitive personal data until the backend is migrated to a POST-based, validated flow and the deployed Apps Script is updated and tested.
- The dashboard's localStorage login timer is a client-side convenience, not server-side authentication. Anyone with access to the page can alter browser storage.
- The dashboard embeds a published Google Sheet. Published spreadsheets can be accessible to anyone with the URL; confirm that no personal, operationally sensitive, or confidential data is exposed before keeping the iframe public.
- The Apps Script backend is not included in this repository, so the frontend cannot independently enforce account permissions or secure the data store.

## Testing

Open the HTML files locally to review layout. Before production use, test the login/registration flow against a non-production Apps Script deployment and verify that passwords never appear in request URLs, logs, or referrer data.