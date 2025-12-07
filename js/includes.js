function chargementcontenu(url, idDemandé) {
    fetch(url)
        .then(reponse => {
            if (!reponse.ok) {
                throw new Error('Erreur de chargement du fichier: ' + reponse.statusText);
            }
            return reponse.text();
        })
        .then(data => {
            document.getElementById(idDemandé).innerHTML = data;
        })
        .catch(error => console.error('Erreur lors de l\'inclusion :', error));
}


chargementcontenu('../Partie_fixe/header.html', 'header-demandé');
chargementcontenu('../Partie_fixe/footer.html', 'footer-demandé');