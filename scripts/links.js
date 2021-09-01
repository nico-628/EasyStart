

const createIcons = () => {
  for (const card of ICONS) {
    let currentItem = document.createElement("a");
    let currentItemIcon = document.createElement("span");
    let containerSpan = document.createElement("span");

    currentItem.classList.add("icon");
    currentItem.href = card.link;

    currentItemIcon.classList.add("fas");
    currentItemIcon.classList.add(card.icon);

    containerSpan.classList.add("container");
    currentItem.append(currentItemIcon);
    containerSpan.append(currentItem);
    iconsContainer.appendChild(containerSpan);
  }
};


function createLinkBoard(boardInfo) {
  let flexContainer = document.createElement("div");
  flexContainer.classList.add("container");

  // Create Board
  let board = document.createElement("div");
  board.classList.add("linkBoard");

  // Create Head (icon+possible name)
  let headContainer = document.createElement("div");
  headContainer.classList.add("linkBoardHead");
  let head = document.createElement("div");
  head.classList.add("fas");
  head.classList.add(boardInfo.icon);
  var headName = document.createTextNode(boardInfo.name);
  headContainer.append(head);
  headContainer.append(headName);
  board.append(headContainer);

  // Add Links
  for (const linkInfo of boardInfo.links) {
    let anchor = document.createElement("a");
    anchor.classList.add("linkContainer");
    let linkSpan = document.createElement("span");
    anchor.href = linkInfo.link;
    var text = document.createTextNode(linkInfo.name);
    linkSpan.appendChild(text);
    anchor.append(linkSpan);
    board.append(anchor);
  }

  flexContainer.append(board);
  testContainer.appendChild(flexContainer);
}

const createLinkBoards = () => {
  for (const board of LinkBoards) {
    createLinkBoard(board);
  }
}

createIcons();
createLinkBoards();