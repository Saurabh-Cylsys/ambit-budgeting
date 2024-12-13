class SortableTable {
    constructor() {
        this.imgElement = document.getElementById("up_down");
        this.img1 = "assets/images/arrow_Up_Down1.svg";
        this.img2 = "assets/images/arrow_Up_Down2.svg";
        this.toggleState = false;
        this.sortButton = document.getElementById("sortButton");
        this.sortButton.addEventListener("click", this.toggleImage.bind(this));
    }

    toggleImage() {
        if (this.toggleState) {
            this.imgElement.src = this.img1;
        } else {
            this.imgElement.src = this.img2;
        }
        this.toggleState = !this.toggleState;
    }
}

// Initialize the sortable table
const sortableTable = new SortableTable();
