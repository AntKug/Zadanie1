function addNavigationLinks() {
  const links = [
    { text: 'Preview', href: 'index.html' },
    { text: 'Absolute', href: 'absolute.html' },
    { text: 'Flex', href: 'flex.html' },
    { text: 'Float', href: 'float.html' },
    { text: 'Grid Areas', href: 'grid-areas.html' },
    { text: 'Grid Cords', href: 'grid-cords.html' },
  ];

  // Pobieramy aktualną nazwę pliku z URL
  const currentPage = window.location.pathname.substring(
    window.location.pathname.lastIndexOf('/') + 1
  );

  // Tworzymy kontener dla linków
  const navDiv = document.createElement('div');
  navDiv.id = 'nav-links';
  navDiv.style.position = 'fixed';
  navDiv.style.bottom = 0;
  navDiv.style.display = 'flex';
  navDiv.style.gap = '1rem';
  navDiv.style.justifyContent = 'center';
  navDiv.style.width = '100%';
  navDiv.style.paddingBlock = '8px';
  navDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.1)'; // lekki odcień, żeby oddzielić od reszty treści
  navDiv.style.fontSize = '12px';
  navDiv.style.overflow = 'hidden';

  // Iterujemy po linkach i tworzymy elementy <a>
  links.forEach((link) => {
    const a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.text;
    a.style.textDecoration = 'none';
    a.style.padding = '4px 8px';
    a.style.borderRadius = '4px';
    a.style.color = '#000';

    // Jeśli link odnosi się do aktualnej podstrony, dodajemy wyróżnienie
    if (link.href === currentPage) {
      a.style.backgroundColor = '#ff0'; // np. żółte tło
      a.style.fontWeight = 'bold';
    }

    navDiv.appendChild(a);
  });

  // Dodajemy element do body
  document.body.appendChild(navDiv);
}

// Uruchamiamy funkcję po załadowaniu strony
window.addEventListener('DOMContentLoaded', addNavigationLinks);
