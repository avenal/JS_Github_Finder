class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }
    showProfile(user) {
        this.profile.innerHTML = `
        <div class="card">
            <div class="row"> 
                <div class="col s3">
                    <img class="responsive-img" src="${user.avatar_url}">
                    <a href="${user.html_url}" target="_blank" class="btn">View Profile</a>
                </div>
            <div class="col s9">
                <span class="badge">Public Repos: ${user.public_repos}</span>
                <span class="badge">Public Gists: ${user.public_gists}</span>
                <span class="badge">Followers: ${user.followers}</span>
                <span class="badge">Following: ${user.following}</span>
                <br><br>
                <ul class="collection">
                    <li class="collection-item">Company: ${user.company}</li>
                    <li class="collection-item">Website/Blog: ${user.blog}</li>
                    <li class="collection-item">Location: ${user.location}</li>
                    <li class="collection-item">Member Since: ${user.created_at}</li>
                </ul>          
            </div>
            </div>
        </div>
        <h3>Latest Repos</h3>
        <div id="repos"></div>
        `;
    }

    showRepos(repos){
        let output = '';
        repos.forEach(function(repo) {
            output +=`
            <div class="card">
                <div class="card-title center-text">
                <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                </div>
                <div class="card-content">
                    <span class="badge">Public Repos: ${repo.stargazers_count}</span>
                    <span class="badge">Public Gists: ${repo.watchers_count}</span>
                    <span class="badge">Followers: ${repo.forks_count}</span>   
                </div> 
            </div>`;
        });
        document.getElementById('repos').innerHTML = output;
    }

    clearProfile(){
        this.profile.innerHTML='';
    }
}