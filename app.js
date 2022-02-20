
      const navbar = document.getElementById("main-nav");
      const toogle = document.getElementById("toogle");
      const navlink = document.getElementById("nav-links");
      const a_nav_link = document.getElementById("a-nav-link");

      document.onclick = function (e) {
        if (e.target.id == "a-nav-link") {
          navlink.classList.remove("active");
          toogle.classList.remove("active");
        }
      };

      toogle.onclick = function () {
        toogle.classList.toggle("active");
        navlink.classList.toggle("active");
      };