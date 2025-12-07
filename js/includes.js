function loadContent(url, targetId) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur de chargement du fichier: ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(targetId).innerHTML = data;
        })
        .catch(error => console.error('Erreur lors de l\'inclusion :', error));
}

// Appel des fonctions pour vos parties fixes
loadContent('../Partie_fixe/header.html', 'header-placeholder');
loadContent('../Partie_fixe/footer.html', 'footer-placeholder');