const backToCollections = document.querySelector(".back-to-collections");

console.log(backToCollections);

const listParentCollections = () => {
    console.log("I am here");
    backToCollections.style.display = "none";

    document.querySelectorAll(".collection-grid-item").forEach((elm) => {
        let aTag = elm.querySelector("a");
        let parentId = elm.dataset.parent;
        let childrenIds = elm.dataset.children;

        
        if (parentId != "0") {
            elm.style.display = "none";
        } else {
            elm.style.display = "block";
            aTag.href = "javascript:;";
            aTag.addEventListener("click", (e) => {
                e.preventDefault();

                if (childrenIds.length <= 0) return;

                let children = childrenIds.split(",");

                children.forEach((v) => {
                    let el = document.querySelector(`[data-parent="${v}"]`);

                    if (el == null) return;

                    el.style.display = "block";
                });

                backToCollections.style.display = "block";

                elm.style.display = "none";

                // Remove event EventListener
                aTag.removeEventListener("click", () => {}, false);
                return false;
            }, false);
        }

    });
}

backToCollections.querySelector("a.back-btn").addEventListener("click", (e) => {
    e.preventDefault();

    listParentCollections();

    return false;
}, false);

listParentCollections();
