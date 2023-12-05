// The purpose of checking whether the link is the clicked link or not is to ensure that we don't unnecessarily remove and re-add the "active" class to the link that was just clicked. If we didn't check this condition, the following scenario could occur:

// User clicks on a link (A) that doesn't have the "active" class.
// The event handler adds the "active" class to link A.
// The loop iterates over all links, including link A.
// For link A, it removes the "active" class (even though we just added it in step 2).
// By checking if the link is the clicked link (if (link !== clickedLink)), we ensure that we only remove the "active" class from links that were not the target of the click event. This avoids unnecessary toggling of the "active" class on the clicked link and only updates the other links accordingly.

// In summary, this check helps optimize the code by avoiding redundant operations on the clicked link and ensuring that the "active" class is only added or removed as needed.

// This code is part of the event handler (handleClick function) and is responsible for ensuring that when you click on a link, only that clicked link gets the "active" class, and all other links lose the "active" class.

// Here's the breakdown:

// topMenuLinks.forEach((link) => {: This loop iterates over all the links in topMenuLinks.

// if (link !== clickedLink) {: This condition checks if the current link in the loop is not the one that was clicked (clickedLink). We want to perform the next action only on links that were not clicked.

// link.classList.remove("active");: If the current link is not the clicked link, it removes the "active" class from that link.

// Initially, none of the links have the "active" class.
// You click on the "catalog" link.
// The loop iterates over all links (all, top selling, search, about, orders, account) and removes the "active" class from each of them since they are not the clicked link.
// The "catalog" link, which was clicked, gets the "active" class.
