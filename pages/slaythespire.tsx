import React, { useState, useEffect } from "react"
// import PropTypes from 'prop-types'
import css from "./slaythespire.module.css"
import LXLayout from "@layout/lxlayout"
// import useSWR from 'swr'
// import useSWRMutation from "swr/mutation"
import { decrypt, encrypt } from "@plugin/savethespire"

export async function getStaticProps(context) {
  return {
    props: {
      cwd: process.cwd() || "",
      // content,
    }, // will be passed to the page component as props
  }
}

const Page = ({ cwd, content }) => {
  const [originItem, setOriginItem] = useState("")
  const [newItem, setNewItem] = useState("")
  const [gold, setGold] = useState(0)
  const [check_All, setCheck_All] = useState(false)
  const [check_unknown, setCheck_unknown] = useState(true)
  const [check_初始, setCheck_初始] = useState(true)
  const [check_BOSS, setCheck_BOSS] = useState(true)
  const [check_商店, setCheck_商店] = useState(true)
  const [check_稀有, setCheck_稀有] = useState(true)
  const [check_罕见, setCheck_罕见] = useState(true)
  const [check_事件, setCheck_事件] = useState(true)
  const [check_普通, setCheck_普通] = useState(true)
  const [check_loadout, setCheck_loadout] = useState(true)

  useEffect(() => {
    console.log("originItem 1. {}")
    setOriginItem("{\n}")

    window.sts = {
      decrypt,
      encrypt,
      saveAction,
      oneKeyAction,
      originItem,
      cwd,
      content,
      // readFile,
      // fs,
    }
  }, [originItem])
  useEffect(() => {
    try {
      console.log("originItem changed: ", originItem)
      const newObj = JSON.parse(originItem)
      setGold(newObj.gold ?? 0)
    } catch (error) {
      // console.log('Error: ', error)
    }
  }, [originItem])
  useEffect(() => {
    setCheck_All(
      check_unknown &&
        check_初始 &&
        check_BOSS &&
        check_商店 &&
        check_稀有 &&
        check_罕见 &&
        check_事件 &&
        check_普通 &&
        check_loadout
    )
  }, [
    check_unknown,
    check_初始,
    check_BOSS,
    check_商店,
    check_稀有,
    check_罕见,
    check_事件,
    check_普通,
    check_loadout,
  ])

  const test = () => {
    let fmt_relics = []
    if (check_unknown) {
      fmt_relics = [...fmt_relics, ...pre_unknown]
    }
    if (check_初始) {
      fmt_relics = [...fmt_relics, ...pre_初始]
    }
    if (check_BOSS) {
      fmt_relics = [...fmt_relics, ...pre_BOSS]
    }
    if (check_商店) {
      fmt_relics = [...fmt_relics, ...pre_商店]
    }
    if (check_稀有) {
      fmt_relics = [...fmt_relics, ...pre_稀有]
    }
    if (check_罕见) {
      fmt_relics = [...fmt_relics, ...pre_罕见]
    }
    if (check_事件) {
      fmt_relics = [...fmt_relics, ...pre_事件]
    }
    if (check_普通) {
      fmt_relics = [...fmt_relics, ...pre_普通]
    }
    const newObj = JSON.parse(originItem)
    newObj.gold = gold
    fmt_relics = Array.from(new Set(fmt_relics))
    if (check_loadout) {
      fmt_relics = fmt_relics.filter((t) => !t.startsWith("loadout"))
    }
    const relics = newObj.relics ?? []
    fmt_relics = fmt_relics.filter((t) => !relics.includes(t))
    newObj.relics = [...relics, ...fmt_relics]

    const metric_items_purchased = newObj.metric_items_purchased ?? []
    const fmt_relics_purchased = fmt_relics.filter(
      (t) => !metric_items_purchased.includes(t)
    )
    newObj.metric_items_purchased = [
      ...metric_items_purchased,
      ...fmt_relics_purchased,
    ]
    // removeD(newObj, fmt_relics)
    setNewItem(JSON.stringify(newObj, null, 2))
    console.log("New Item: ", newObj)
  }
  const refreshFileInfo = async () => {
    const files = document.querySelector(`#${css.savepath}`)?.files
    if (!files || files?.length <= 0) {
      return
    }
    const file = files?.item(0)
    const text = await file.text()
    console.log("-->uploadfile: ", file)
    console.log("-->uploadfile: ", text)
    console.log("originItem 5. onChange")
    setOriginItem(text)
  }
  const handleOriginChange = (e) => {
    // console.log('e: ', e)
    console.log("originItem 3. handleOriginChange")
    setOriginItem(e.target.value)
  }
  const decryptAction = () => {
    const base64 = decrypt(originItem)
    setOriginItem(base64)
    console.log("originItem 4. decryptAction: ", originItem)
  }
  const encryptAction = () => {
    const base64 = encrypt(newItem)
    setNewItem(base64)
  }
  const oneKeyAction = () => {
    decryptAction()
    setTimeout(() => {
      test()
    }, 2000)
  }
  const saveAction = (e) => {
    let inputItem = document.querySelector(`#${css.savepath}`)
    if (!inputItem.files) {
      console.log("文件读取失败!")
      return
    }
    let originFile = inputItem.files[0]
    let newFile = new File([newItem || "233"], originFile.name, {
      type: originFile.type,
      lastModified: new Date().getTime(),
    })
    let container = new DataTransfer()
    container.items.add(newFile)
    inputItem.files = container.files
    return newFile
  }
  return (
    <LXLayout>
      {/* <style jsx>{``}</style> */}
      <div className={css.top}>
        <label htmlFor={css.savepath}>save path:</label>
        <input
          // type="text"
          type="file"
          name={css.savepath}
          id={css.savepath}
          onChange={refreshFileInfo}
        />
        {/* <button onClick={refreshFileInfo}>Refresh</button> */}
      </div>
      <div className={css.wrapper}>
        <div className={css.left}>
          {/* <label>Origin Item: </label> */}
          <textarea
            name="originItem"
            id="originItem"
            className={css.originItem}
            cols="30"
            rows="30"
            placeholder="Origin Item here..."
            value={originItem}
            onChange={handleOriginChange}
          ></textarea>
        </div>
        <div className={css.middle}>
          <label htmlFor="gold">Gold:</label>
          <input
            type="text"
            id="gold"
            value={gold}
            onChange={(e) => setGold(parseInt(e.target.value) || 0)}
          />
          <div className={css.checkItem}>
            <label htmlFor="allChecked">allChecked:</label>
            <input
              type="checkbox"
              name="allChecked"
              id="allChecked"
              checked={check_All}
              onChange={(e) => {
                const checked = e.target.checked
                setCheck_unknown(checked)
                setCheck_初始(checked)
                setCheck_BOSS(checked)
                setCheck_商店(checked)
                setCheck_稀有(checked)
                setCheck_罕见(checked)
                setCheck_事件(checked)
                setCheck_普通(checked)
                setCheck_loadout(checked)
              }}
            />
          </div>
          <div className={css.checkItem}>
            <label htmlFor="check_unknown">unknown:</label>
            <input
              type="checkbox"
              name="check_unknown"
              id="check_unknown"
              checked={check_unknown}
              onChange={(e) => setCheck_unknown(e.target.checked)}
            />
          </div>
          <div className={css.checkItem}>
            <label htmlFor="check_初始">初始:</label>
            <input
              type="checkbox"
              name="check_初始"
              id="check_初始"
              checked={check_初始}
              onChange={(e) => setCheck_初始(e.target.checked)}
            />
          </div>
          <div className={css.checkItem}>
            <label htmlFor="check_BOSS">BOSS:</label>
            <input
              type="checkbox"
              name="check_BOSS"
              id="check_BOSS"
              checked={check_BOSS}
              onChange={(e) => setCheck_BOSS(e.target.checked)}
            />
          </div>
          <div className={css.checkItem}>
            <label htmlFor="check_商店">商店:</label>
            <input
              type="checkbox"
              name="check_商店"
              id="check_商店"
              checked={check_商店}
              onChange={(e) => setCheck_商店(e.target.checked)}
            />
          </div>
          <div className={css.checkItem}>
            <label htmlFor="check_稀有">稀有:</label>
            <input
              type="checkbox"
              name="check_稀有"
              id="check_稀有"
              checked={check_稀有}
              onChange={(e) => setCheck_稀有(e.target.checked)}
            />
          </div>
          <div className={css.checkItem}>
            <label htmlFor="check_罕见">罕见:</label>
            <input
              type="checkbox"
              name="check_罕见"
              id="check_罕见"
              checked={check_罕见}
              onChange={(e) => setCheck_罕见(e.target.checked)}
            />
          </div>
          <div className={css.checkItem}>
            <label htmlFor="check_事件">事件:</label>
            <input
              type="checkbox"
              name="check_事件"
              id="check_事件"
              checked={check_事件}
              onChange={(e) => setCheck_事件(e.target.checked)}
            />
          </div>
          <div className={css.checkItem}>
            <label htmlFor="check_普通">普通:</label>
            <input
              type="checkbox"
              name="check_普通"
              id="check_普通"
              checked={check_普通}
              onChange={(e) => setCheck_普通(e.target.checked)}
            />
          </div>
          <div className={css.checkItem}>
            <label htmlFor="check_loadout">remove loadout:</label>
            <input
              type="checkbox"
              name="check_loadout"
              id="check_loadout"
              checked={check_loadout}
              onChange={(e) => setCheck_loadout(e.target.checked)}
            />
          </div>
          <button onClick={test}>Convert</button>
          <button onClick={decryptAction}>decrypt</button>
          <button onClick={encryptAction}>encrypt</button>
          <button onClick={oneKeyAction}>one key</button>
        </div>
        <div className={css.right}>
          {/* <label>New Item: </label> */}
          <textarea
            name="newItem"
            id="newItem"
            cols="30"
            className={css.newItem}
            placeholder="New Item here..."
            // rows="50"
            value={newItem}
            disabled
          ></textarea>
        </div>
      </div>
    </LXLayout>
  )
}

// Page.propTypes = {}
// export const getStaticPaths = async () => { return { paths, fallback: true }; }
// export const getStaticProps = async ({ params, preview, previewData }) => { return { props: { } }; }
// export const getServerSideProps = async ({ params, req, res, query, preview, previewData }) => {}
// Page.getInitialProps = async ({ req }) => {}
Page.displayName = "📌 Page - slaythespire"

export default Page

const pre_unknown = [
  "Necronomicon",
  // "Ssserpent Head",
  // "Warped Tongs",
]
const pre_初始 = [
  /// 初始
  // "Ring of the Snake",
  /// [new]
  "PureWater",
  "Ring of the Snake",
]
const pre_BOSS = [
  /// BOSS
  // "Ring of the Serpent",
  // "Question Card",
  // "Lizard Tail",
  // "Black Blood",
  /// [new]
  "Black Star",
  "Coffee Dripper",
  "HolyWater",
  "HoveringKite",
  "Runic Pyramid",
  "SacredBark",
  "SlaversCollar",
  "VioletLotus",
  "WristBlade",
]
const pre_商店 = [
  /// 商店
  /// [new]
  "ClockworkSouvenir",
  "HandDrill",
  "Medical Kit",
  "Membership Card",
  "OrangePellets",
  "PrismaticShard",
  "Sling",
  "Strange Spoon",
]
const pre_稀有 = [
  /// 稀有
  /// [new]
  "Calipers",
  "Champion Belt",
  "Charon's Ashes",
  "Dead Branch",
  "Du-Vu Doll",
  "Ginger",
  "Ice Cream",
  "Lizard Tail",
  "Peace Pipe",
  "Prayer Wheel",
  "Shovel",
  "Test 4",
  "Tingsha",
  "Turnip",
  "Unceasing Top",
]
const pre_罕见 = [
  /// 罕见
  // "Toolbox",
  // "Smiling Mask",
  // "Pantograph",
  // "Discerning Monocle",
  // "Chemical X",
  /// [new]
  "Blue Candle",
  "Darkstone Periapt",
  "Dodecahedron",
  "Frozen Egg 2",
  "Gremlin Horn",
  "InkBottle",
  "Kunai",
  "Letter Opener",
  "Molten Egg 2",
  "Mummified Hand",
  "Ornamental Fan",
  "Paper Crane",
  "Paper Frog",
  "Question Card",
  "Shuriken",
  "Singing Bowl",
  "StrikeDummy",
  "Sundial",
  "TeardropLocket",
  "The Courier",
  "Toxic Egg 2",
  "White Beast Statue",
  "Yang",
  "Yin",
]
const pre_事件 = [
  /// 事件
  /// [new]
  "Enchiridion",
  "Golden Idol",
  "Nloth's Gift",
  "Odd Mushroom",
  "Red Mask",
]
const pre_普通 = [
  /// 普通
  // "Ring of the Snake",
  // "Singing Bowl",
  // "Snake Skull",
  // "Prayer Wheel",
  /// [new]
  "Bag of Marbles",
  "Bag of Preparation",
  "CeramicFish",
  "Happy Flower",
  "Juzu Bracelet",
  "Lantern",
  "Nunchaku",
  "Oddly Smooth Stone",
  "Pen Nib",
  "Potion Belt",
  "PreservedInsect",
  "Smiling Mask",
]
