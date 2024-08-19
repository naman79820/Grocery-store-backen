import type { Schema, Attribute } from '@strapi/strapi';

export interface OrdereItemOrderedItem extends Schema.Component {
  collectionName: 'components_ordere_item_ordered_items';
  info: {
    displayName: 'Ordered-Item';
    description: '';
  };
  attributes: {
    quantity: Attribute.Integer;
    amount: Attribute.Decimal;
    product: Attribute.Relation<
      'ordere-item.ordered-item',
      'oneToOne',
      'api::product.product'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'ordere-item.ordered-item': OrdereItemOrderedItem;
    }
  }
}
