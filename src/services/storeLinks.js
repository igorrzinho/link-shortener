// buscar os links salvos
export async function getLinkSave(key) {
  const myLinks = await localStorage.getItem(key);

  let linksSave = JSON.parse(myLinks) || [];

  return linksSave;
}

// salvar link no storage
export async function saveLink(key, newLink) {
  let linksStored = await getLinkSave(key);
  const hasLink = linksStored.some((link) => link.id === newLink.id);
  if (hasLink) {
    console.log("link ja existe");
    return;
  }

  linksStored.push(newLink);
  await localStorage.setItem(key, JSON.stringify(linksStored));
  console.log("link salvo");
}

///deletar um link

export function deleteLink(links, id) {
  let myLinks = links.filter((item) => {
    return item.id !== id;
  });

  localStorage.setItem("encurtar link", JSON.stringify(myLinks));

  return myLinks;
}
