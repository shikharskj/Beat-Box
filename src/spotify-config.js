
const AUTH_URL = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000";
const clientId = "6fdb149094b349e3af1ac094f5c277b6";
const clientSecret =  "65cf62f3258144028506572d675b5ed8";

const scopes = [
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-top-read",
    "app-remote-control",
    "streaming",
    "user-read-private",
    "user-library-read",
    "user-library-modify"
];

const LOGIN_URL = 
    `${AUTH_URL}?client_id=${clientId}&client_secret=${clientSecret}&redirect_uri=${redirectUri}&scope=${scopes.join(
        "%20"
    )}&response_type=token&show_dialog=false`

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((acc, item) => {
            // #accessToken=mySecretKey?name=shikhar
            let parts = item.split('=');
            acc[parts[0]] = decodeURIComponent(parts[1])
            return acc
        }, {});
}

// const SpotifyApi = new SpotifyWebApi({
//     clientId,
//     clientSecret,
//     redirectUri: window.location.origin,
// });

// export default SpotifyApi;
export { LOGIN_URL };