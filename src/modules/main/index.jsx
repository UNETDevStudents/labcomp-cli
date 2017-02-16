const pathname = window.location.pathname.replace(/\//g, '');
const el = document.getElementById(`menu-${pathname}`);

if (el) el.classList.add('active');
