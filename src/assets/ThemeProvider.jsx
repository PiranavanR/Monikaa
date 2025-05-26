// In Hero.jsx or a separate ThemeToggle.js
import { useEffect } from 'react';

const useThemeToggle = () => {
  useEffect(() => {
    const toggleButton = document.getElementById('switch');
    const profileImage = document.querySelector('.images img');

    if (toggleButton && profileImage) {
      const applyTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        profileImage.src = theme === 'dark' ? './img/Profile Dark.png' : './img/Profile Light.png';
        profileImage.alt = theme === 'dark' ? 'Profile Dark Mode' : 'Profile Light Mode';
      };

      toggleButton.addEventListener('change', function () {
        const theme = this.checked ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
        applyTheme(theme);
      });

      const currentTheme = localStorage.getItem('theme') || 'light';
      toggleButton.checked = currentTheme === 'dark';
      applyTheme(currentTheme);
    }
  }, []);
};

export default useThemeToggle;
