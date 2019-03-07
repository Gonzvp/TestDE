{   
    "@context": "http://schema.org/",
    "@type": "Service",
    "serviceType": "Agencia Aduanal",
    "provider":     
        {
            "@type": "organization", //aqui se pude poner también el apartado de corporación
            "name":"Grupo ILT",
            "url":"http://www.grupoilt.com/", 
            "sameAs": 
                [
                    "http://www.facebook.com/",
                    "http://www.instagram.com/"
                ],
            "logo": 
                {
                    "@type":"ImageObject",
                    "url":"https://www.grupoilt.com/images/standard/lg2.png"
                },
            "description":"Servicios de agencia aduanal, comercio exterior, logística internacional, fletes internacionales, importación y comercialización de mercancías internacionales, clasificación arancelaria, pedimentos, regímenes aduaneros.",
            "address":
                {
                    "@type":"PostalAddress",
                    "streetAddress":"Avenida 661 N°8",
                    "addressLocality":"Colonia San Juan de Aragón lV y V Sección",
                    "addressRegion":"CDMX",
                    "postalCode":"07979",
                    "addressCountry":"MX"
                },
            "contactPoint":
                {      
                    "@type":"contactPoint",
                    "telephone": "+525548596547",
                    "email": "contacto@grupoilt.com.mx",
                    "contactType": "Customer service"
                }   
        },
  "areaServed": 
        {
            "@type": "country",
            "name": "México"
        }
}