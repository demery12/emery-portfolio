$(function() {
    const projectBase = getProjectBase()
    const projectsMapping = {
                            'bodl': {
                                'imgName': 'BODL-Service-better.JPG',
                                'projectName': 'BODL-Service',
                                'projectDescription': 'A cocktail generating deep learning web app',
                                'projectLink': projectBase + 'BODL-Service/index.html',
                                'gitHubLink': 'https://github.com/demery12/BODL-Service'
                            },
                            'towers': {
                                'imgName': 'towers.jpg',
                                'projectName': 'Towers of Hanoi',
                                'projectDescription': 'A data visualization of the classic algorithm',
                                'projectLink': projectBase + 'towers/index.html',
                                'gitHubLink': 'https://github.com/demery12/towers-of-hanoi'

                            },
                            'bridge': {
                                'imgName': 'bridge-card2.jpg',
                                'projectName': 'The Bridge',
                                'projectDescription': 'A classical language vocabulary learning tool',
                                'projectLink': 'https://bridge.haverford.edu/',
                                'gitHubLink': 'https://github.com/HCDigitalScholarship/bridge-repo'
                            },
                            'vroom-vroom':{
                                'imgName': 'vroom-vroom.PNG',
                                'projectName': 'Vroom Vroom',
                                'projectDescription': 'An HTML5 driving game',
                                'projectLink': 'https://vroom-vroom-game.herokuapp.com/index.html',
                                'gitHubLink': 'https://github.com/demery12/vroom-vroom'
                            },

                          }
    for(project of Object.keys(projectsMapping)) {
        addToGallery(project, projectsMapping[project]);
    }
    // load the navbar html, then populate the projects dropdown
    $("#nav-placeholder").load(projectBase + "nav.html", function() {
        for(project of Object.keys(projectsMapping)) {
                addToNavBar(project, projectsMapping[project]);
        }
    });

});

function addToGallery(project, projectInfo) {
    $('#projects-gallery').append(
        '<div class="col-md-3">' +
            '<div class="thumbnail">' +
                '<a href="'+ projectInfo.projectLink + '">' +
                    '<img src="static/imgs/'+ projectInfo.imgName + '" alt="'+ projectInfo.projectName + '" style="width=300px;">' +
                    '<div class="caption">' +
                        '<p><strong>'+ projectInfo.projectName + '</strong>: ' + projectInfo.projectDescription + '</p>' +
                    '</div>' +
                '</a>' +
                '<span><a href="' + projectInfo.gitHubLink + '"><img class="logo" src="static/imgs/GitHub_Logo.png" alt="Link to GitHub Repository"></a></span>' +
            '</div>' +
        '</div>')
}

function addToNavBar(project, projectInfo) {
    $('#projects-dropdown').append('<li><a href="' + projectInfo.projectLink +'">'+ projectInfo.projectName + '</a></li>')
}

function getProjectBase() {
    // this more dynamic implementation + the static nature I am working with have made it so I need a way to specify
    // the links based on where we are or absolutely
    // I am specifying absolutely, but that changes depending whether I am local or not. This is a workaround for that.
    let projectBase = "";
    if (window.location.href.includes('emery-portfolio')) {
        projectBase = '/emery-portfolio/'
    } else {
        projectBase = '/'
    }
    return projectBase
}