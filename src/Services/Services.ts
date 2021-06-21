export async function getIssues() {
    let url:string = 'https://api.github.com/repos/facebook/react/issues';
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
