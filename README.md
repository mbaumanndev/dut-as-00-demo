Démo VS Code et Git
===================

Ce dépôt est à destination des étudiants en année spéciale du département informatique de l'IUT d'Amiens.

Procédure
---------

Créez-vous un compte sur [GitHub][1] puis demandez un accès à [GitHub Education][2] pour bénéficier de différents avantages.


Maintenant que vous avez un comtpe GitHub, créez un fork de ce dépôt, puis clônez votre fork localement.

Editez le fichier `index.html` et ajoutez-y le code suivant après `<!-- Ajouter après -->` en remplaçant les valeurs entre `<!-- -->`.

```html
<div class="col">
    <div class="card shadow-sm">
        <img class="bd-placeholder-img card-img-top" width="100%" height="225"
            src="https://picsum.photos/seed/<!--votre quadri -->/400/225"
            alt="Thumbnail"
            aria-label="Placeholder: Thumbnail" />

        <div class="card-body">
            <h5 class="card-title"><!-- votre nom/pseudo --></h5>
            <p class="card-text"><!-- Une description --></p>
        </div>
    </div>
</div>
```

Faites un commit puis poussez vos modifications sur GitHub, et ouvrez une pull request.

[1]: https://github.com
[2]: https://education.github.com/students
