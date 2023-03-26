let query = new URLSearchParams(location.search);

if (query.has('search_query')) {
    let search = query.get('search_query');
    console.log(search)
}