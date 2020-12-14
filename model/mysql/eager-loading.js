import { DataTypes } from 'sequelize'
import {
//   V_Number,
//   V_String,
//   V_Text,
//   V_Boolean,
  sequelize,
} from '../../model/mysql/common'

const User = sequelize.define(
  'user',
  { name: DataTypes.STRING },
  { timestamps: false },
)
const Task = sequelize.define(
  'task',
  { name: DataTypes.STRING },
  { timestamps: false },
)
const Tool = sequelize.define(
  'tool',
  {
    name: DataTypes.STRING,
    size: DataTypes.STRING,
  },
  { timestamps: false },
)
User.hasMany(Task)
Task.belongsTo(User)
User.hasMany(Tool, { as: 'Instruments' })

export { User, Task, Tool }
