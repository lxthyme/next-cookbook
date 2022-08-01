import { faker as f } from '@faker-js/faker';

export const faker = f

export const name = () => {
  faker.locale = 'zh_CN'
  // return faker.name.firstName()
  return faker.internet.userName()
}

export const text = () => {
  faker.locale = 'zh_CN'
  // return faker.lorem.text()
  return name()
}
