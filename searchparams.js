function changeLang(locale) {
  console.log("change lang");
  console.log({ locale });

  var searchParams = new URLSearchParams(window.location.search);
  console.log("locale: ");
  console.log(searchParams.get("locale"));
  console.log("state: ");
  console.log(searchParams.get("state"));
  searchParams.set("ui_locales", locale);
  window.location.search = searchParams.toString();
}
