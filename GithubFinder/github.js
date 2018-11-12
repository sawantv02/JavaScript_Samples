class GitHub {
	constructor() {
		this.client_id = '3f5f279b3be776c38334';
		this.client_secret = 'd9251bbd3f9415c349b8fc71d080803d2c2a10a8';
		this.repos_count = 5;
		this.repos_sort = 'created: asc';
	}

	async getUser(user) {
		const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

		const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_count}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

		const profile = await profileResponse.json();
		const repos = await reposResponse.json();

		return {
			profile,
			repos
		}
	}
}