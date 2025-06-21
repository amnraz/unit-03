
    const item2 = document.getElementById('item2');

    item2.addEventListener('click', () => {
      // Get parent <ul> element
      const parent = item2.parentNode;

      // Alert the text content of the parent <ul>
      alert(parent.textContent);

      // Log the previous and next siblings
      const prev = item2.previousElementSibling;
      const next = item2.nextElementSibling;

      if (prev) {
        console.log('Previous sibling text:', prev.textContent);
      }
      if (next) {
        console.log('Next sibling text:', next.textContent);
      }
    });