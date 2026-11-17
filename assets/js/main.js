(function () {
  "use strict";

  var EMAIL = "info@tagbuildingcoltd.com";

  // ---------- Mobile navigation ----------
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    var setOpen = function (open) {
      toggle.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("is-open", open);
    };
    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setOpen(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setOpen(false);
    });
  }

  // ---------- Footer year ----------
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  // ---------- Quote form: compose an email in the visitor's mail app ----------
  var form = document.getElementById("quote-form");
  if (!form) return;
  var errorBox = document.getElementById("form-error");
  var successBox = document.getElementById("form-success");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var required = form.querySelectorAll("[required]");
    var missing = [];
    required.forEach(function (el) {
      var ok = el.value.trim() !== "";
      el.setAttribute("aria-invalid", ok ? "false" : "true");
      if (!ok) missing.push(el);
    });
    var emailField = form.elements.email;
    if (emailField.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value.trim())) {
      emailField.setAttribute("aria-invalid", "true");
      missing.push(emailField);
    } else {
      emailField.setAttribute("aria-invalid", "false");
    }

    if (missing.length) {
      errorBox.textContent = "Please fill in your name, phone number and a few details about the project.";
      if (missing.indexOf(emailField) !== -1 && missing.length === 1) {
        errorBox.textContent = "Please check your email address.";
      }
      errorBox.hidden = false;
      successBox.hidden = true;
      missing[0].focus();
      return;
    }
    errorBox.hidden = true;

    var v = function (name) { return form.elements[name].value.trim(); };
    var type = v("type") || "General enquiry";
    var subject = "Quote request: " + type + " (" + v("name") + ")";
    var body = [
      "Name: " + v("name"),
      "Phone: " + v("phone"),
      "Email: " + (v("email") || "-"),
      "Postcode: " + (v("postcode") || "-"),
      "Type of work: " + type,
      "",
      v("message"),
      "",
      "(Sent from the enquiry form on tagbuildingcoltd.com)"
    ].join("\r\n");

    window.location.href =
      "mailto:" + EMAIL +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);

    successBox.hidden = false;
  });
})();
