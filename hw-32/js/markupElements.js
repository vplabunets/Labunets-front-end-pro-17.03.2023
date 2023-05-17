export function createCategoriesMarkup(data) {
  const categoriesMarkup = ` <label>
             Categories
            <select class="select" name="categories" id="city-select" required>
            <option value="">--Product type--</option>
            ${data
              .map(
                (element) => `<option value="${element}">${element}</option>`
              )
              .join("")} 
            </select><label>`;
  return categoriesMarkup;
}

export const myOrdersButtonMarkup = `<button class="my-orders-button button" type="button" id="my-orders-button">
  My orders</button>`;
