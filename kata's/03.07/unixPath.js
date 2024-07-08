function main() {
    console.log(JSON.stringify(solution("")) === JSON.stringify("/"));
    console.log(JSON.stringify(solution("google", "search", "test")) === JSON.stringify("/google/search/test"));
    console.log(JSON.stringify(solution("   /testing", "", "", "  \\  empty", "\\parts/", " and ", "", "with/different\\slashes    ")) === JSON.stringify("/testing/empty/parts/and/with/different/slashes"));
    console.log(JSON.stringify(solution(" .. ", "/complex/path/with/slashes/inside/", " . ", "\\complex\\path\\with\\back\\slashes\\inside\\")) === JSON.stringify("/../complex/path/with/slashes/inside/./complex/path/with/back/slashes/inside"));
}

function solution(...paths) {
    return ('/' + paths.join('/').replace(/\s/g, '').replace(/\\+/g, '/'))
        .replace(/\/{2,}/g, '/')
        .replace(/(?<=\S)\/$/g, '');
}

main();