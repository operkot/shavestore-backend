'use strict';

/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

const formatProductPrice = price =>
  new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0,
  }).format(price)

const orderItemTemplate = ({ title, quantity, price }) => `
  ${quantity} x ${title} - <strong>${formatProductPrice(price * quantity)}</strong> <br/>
`

const convertOrderItemsToStr = order =>
  order.reduce((html, item) => html + orderItemTemplate(item), '')

module.exports = createCoreController('api::order.order', ({ strapi }) => ({
  async create(ctx) {
    const response = await super.create(ctx);
    // const { username, products } = ctx.request.body.data

    // const order = convertOrderItemsToStr(products)

    // await strapi.plugins['email'].services.email.send({
    //   to: 'operkot777@gmail.com',
    //   from: 'orders.shavestore@yandex.ru',
    //   subject: 'Новый заказ на ShaveMarket',
    //   html: `Новый заказ от пользователя <strong>${username}</strong>: <br/> <br/> ${order}`
    // })

    // console.log('!!!NEW ORDER CREATED!!!');
    // console.log(order);

    return response
  }
}));
