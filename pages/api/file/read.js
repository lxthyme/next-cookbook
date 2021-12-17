// import { fs } from "fs";
import fs from "fs-extra";

const API = (req, res) => {

  const result = fs.readFile('/Users/lxthyme/Desktop/Lucky/.config/Anything-Backup/Bash/.zsh_history', 'utf-8', (err, data) => {
    if (err) throw err
    console.log(data)
    res.status(200).json({
      success: true,
      data: `${data}`
    })
  })

}

export default API
