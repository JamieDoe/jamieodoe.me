export default async function getGithubStats() {
  try {
    const data = await fetch(
      "https://api.github.com/users/JamieDoe/repos"
    ).then((res) => res.json());
    const languages = data
      .map((repo) => {
        return repo.language;
      })
      .filter((x) => !!x);
    languages.filter(Boolean);

    languages.map((x) => (languages[x] = (languages[x] || 0) + 1));
    return languages;
  } catch (error) {
    console.log(error);
  }
}
