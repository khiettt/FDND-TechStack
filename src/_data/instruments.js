export default async function(){
    const response = await fetch(`https://fdnd-agency.directus.app/items/preludefonds_instruments?fields=status,instrument,property,brand,key`);
    const json = await response.json();
    return json.data;
}