function drawLogo() {
  const logoLink = document.createElement('a');
  logoLink.setAttribute('href', '../list/list.html');

  const logo = document.createElement('img');
  logo.setAttribute('src', '../images/logo.png');
  logo.setAttribute('class', 'logo');

  const logoDiv = document.getElementById('div__logo');

  logoLink.appendChild(logo);
  logoDiv.appendChild(logoLink);
}
drawLogo();
