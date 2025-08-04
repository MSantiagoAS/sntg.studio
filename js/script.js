  const servicios = document.querySelectorAll(".servicio");
  const logo = document.getElementById("logo");

  logo.addEventListener("click", () => {
    alert("¡Hola! Soy Santiago, un desarrollador web que se enfoca en crear sitios simples y funcionales. Aquí para ayudarte a tener una presencia digital clara y accesible.");
  });
 
 
  servicios.forEach((servicio, index) => {
    servicio.addEventListener("click", () => {
      let mensajes = [
        "⚡ Sitios web funcionales\nDiseño páginas que cargan rápido, se ven bien y hacen lo que tienen que hacer. Sin complicaciones.",
        "🎨 Interfaces con estilo\nNo soy diseñador top, pero me fijo en los detalles. Busco que tu web se vea bien, sea clara y transmita lo que toca.",
        "🧠 Identidad simple y clara\nAyudo a que tu marca tenga una presencia digital básica pero con sentido. Que se entienda y no se pierda entre tantas.",
        "🔍 Optimización básica\nHago lo posible para que tu sitio no se pierda en Google. SEO básico, estructura clara y código limpio.",
        "📲 Conexiones útiles\nAgrego lo necesario: WhatsApp, correo, botones, mapas... lo que tenga sentido para ti. No más, no menos.",
        "🚀 En construcción constante\nPor ahora hago páginas web funcionales y accesibles. Pero esto apenas empieza — se viene algo más grande."
      ];
      alert(mensajes[index]);
    });
  });