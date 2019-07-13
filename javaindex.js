'use strict'
//here be a function to add items
$(function addMe() {
    $('#js-shopping-list-form').on('submit', function(event) {
        event.preventDefault();
      const userInput = $('#shopping-list-entry').val();  
      $('ul').append(
        `<li>
        <span class="shopping-item">${userInput}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`
      );
    });
});
//here be a function for checking 
$(function checkCheck() {
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        event.preventDefault;
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
});
});
//here be a function for deleting
$(function begoneList() {
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        event.preventDefault;
        $(this).closest('li').remove();
    });
});
