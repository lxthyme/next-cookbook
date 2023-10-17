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
  const [check_unknown, setCheck_unknown] = useState(true)
  const [check_初始, setCheck_初始] = useState(true)
  const [check_BOSS, setCheck_BOSS] = useState(true)
  const [check_商店, setCheck_商店] = useState(true)
  const [check_稀有, setCheck_稀有] = useState(true)
  const [check_罕见, setCheck_罕见] = useState(true)
  const [check_事件, setCheck_事件] = useState(true)
  const [check_普通, setCheck_普通] = useState(true)
  const [savefilePath, setSavefilePath] = useState("")

  useEffect(() => {
    setOriginItem("{\n}")
    const savefile =
      localStorage.getItem("savefile") || `${cwd}/mockData/t.json`
    setSavefilePath(savefile)

    window.sts = {
      decrypt,
      encrypt,
      cwd,
      content,
      // readFile,
      // fs,
    }
  }, [])
  useEffect(() => {
    try {
      const newObj = JSON.parse(originItem)
      setGold(newObj.gold ?? 0)
    } catch (error) {
      // console.log('Error: ', error)
    }
  }, [originItem])

  const readXXX = () => {
    console.log("path: ", savefilePath)
    // sendRequest('', { path: savefilePath })
    // http://0.0.0.0:3003/api/lxthyme/readFile?path=/Users/lxthyme/Desktop/Lucky/Demo.React/next-cookbook/mockData/calDelivery.htm.json
    fetch("/api/lxthyme/readFile", {
      method: "POST",
      body: JSON.stringify({ path: savefilePath }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("res: ", res)
        const content = res.content
        setOriginItem(content)
      })
  }

  const removeD = (newObj, list) => {
    // const all = [
    //   ...(newObj.uncommon_relics ?? []),
    //   ...(newObj.rare_relics ?? []),
    //   ...(newObj.common_relics ?? []),
    //   ...(newObj.boss_relics ?? []),
    //   ...(newObj.shop_relics ?? []),
    // ]
    newObj.uncommon_relics = newObj.uncommon_relics?.filter(
      (t) => !list.includes(t)
    )
    newObj.rare_relics = newObj.rare_relics?.filter((t) => !list.includes(t))
    newObj.common_relics = newObj.common_relics?.filter(
      (t) => !list.includes(t)
    )
    newObj.boss_relics = newObj.boss_relics?.filter((t) => !list.includes(t))
    newObj.shop_relics = newObj.shop_relics?.filter((t) => !list.includes(t))
  }

  const test = () => {
    let {
      uncommon_relics,
      relics,
      rare_relics,
      common_relics,
      boss_relics,
      shop_relics,
      ...mockData_others
    } = mockData

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
    fmt_relics = [...(newObj.relics ?? []), ...fmt_relics]
    fmt_relics = Array.from(new Set(fmt_relics))
    newObj.relics = fmt_relics
    newObj.metric_items_purchased = [
      ...(newObj.metric_items_purchased ?? []),
      ...fmt_relics,
    ]
    removeD(newObj, fmt_relics)
    setNewItem(JSON.stringify(newObj, null, 2))
    console.log("New Item: ", newObj)
  }
  const handleOriginChange = (e) => {
    // console.log('e: ', e)
    setOriginItem(e.target.value)
  }
  const decryptAction = (e) => {
    const base64 = decrypt(originItem)
    setOriginItem(base64)
  }
  const encryptAction = (e) => {
    const base64 = encrypt(newItem)
    setNewItem(base64)
  }
  const handleSaveFileChange = async (e) => {
    // if (savefilePath.length > 0) {
    //   localStorage.setItem("savefile", savefilePath)

    //   readXXX()
    // }
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
          // value={savefilePath}
          onChange={async (e) => {
            const file = e.target.files.item(0)
            const text = await file.text();
            console.log('-->uploadfile: ', e.target.value)
            console.log('-->uploadfile: ', text)
            setSavefilePath(e.target.value)
            setOriginItem(text)
          }}
        />
        {/* <input
          type="file"
          name='uploadfile'
          id="uploadfile"
          onChange={async (e) => {
            // setSavefilePath(e.target.value || "")
            const file = e.target.files.item(0)
            const text = await file.text();
            console.log('-->uploadfile: ', e.target.value)
            console.log('-->uploadfile: ', text)
          }}
        /> */}
        {/* <button onClick={handleSaveFileChange}>读取</button> */}
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
          <button onClick={test}>Convert</button>
          <button onClick={decryptAction}>decrypt</button>
          <button onClick={encryptAction}>encrypt</button>
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
Page.displayName = "📌 Page - PAGE"

export default Page

const pre_unknown = [
  "Necronomicon",
  "Red Mask",
  // "Ssserpent Head",
  // "Warped Tongs",
]
const pre_初始 = [
  /// 初始
  // "Ring of the Snake",
]
const pre_BOSS = [
  /// BOSS
  "Runic Pyramid",
  "Ring of the Serpent",
  "Question Card",
  "Lizard Tail",
  "Black Star",
  "Black Blood",
]
const pre_商店 = [
  /// 商店
  "Medical Kit",
  "Membership Card",
  "Strange Spoon",
]
const pre_稀有 = [
  /// 稀有
  "Unceasing Top",
  "Shovel",
  "Peace Pipe",
  "Ice Cream",
  "Ginger",
  "Dead Branch",
  "Champion Belt",
  "Calipers",
]
const pre_罕见 = [
  /// 罕见
  "Toolbox",
  "Smiling Mask",
  "Paper Frog",
  "Paper Crane",
  "Pantograph",
  "Mummified Hand",
  "Discerning Monocle",
  "The Courier",
  "Chemical X",
  "Blue Candle",
]
const pre_事件 = [
  /// 事件
  "Odd Mushroom",
  "Nloth's Gift",
  "Golden Idol",
  // 'Golden Idol (Relic)',
  "Enchiridion",
]
const pre_普通 = [
  /// 普通
  "Ring of the Snake",
  "Singing Bowl",
  "Snake Skull",
  "Prayer Wheel",
  "Pen Nib",
  "Lantern",
  "Juzu Bracelet",
  "Bag of Preparation",
  "Bag of Marbles",
]

const mockData = {
  shuffle_seed_count: 0,
  metric_purchased_purges: 0,
  metric_path_per_floor: [],
  monster_list: [
    "2 Louse",
    "Small Slimes",
    "Jaw Worm",
    "2 Fungi Beasts",
    "Looter",
    "Exordium Thugs",
    "3 Louse",
    "Red Slaver",
    "2 Fungi Beasts",
    "Gremlin Gang",
    "Looter",
    "Exordium Wildlife",
    "Large Slime",
    "Looter",
    "2 Fungi Beasts",
    "Exordium Thugs",
  ],
  metric_potions_floor_spawned: [],
  daily_mods: ["Allstar", "Hoarder", "Midas"],
  metric_campfire_choices: [],
  is_ascension_mode: false,
  metric_items_purchased: [],
  is_endless_mode: false,
  merchant_seed_count: 0,
  floor_num: 1,
  uncommon_relics: [
    "Darkstone Periapt",
    "Bottled Lightning",
    "Frozen Egg 2",
    "Yang",
    "Molten Egg 2",
    "Question Card",
    "HornCleat",
    "Letter Opener",
    "InkBottle",
    "Ornamental Fan",
    "StrikeDummy",
    "Toxic Egg 2",
    "White Beast Statue",
    "Mercury Hourglass",
    "Meat on the Bone",
    "Shuriken",
    "Pantograph",
    "Mummified Hand",
    "Eternal Feather",
    "The Courier",
    "Kunai",
    "Matryoshka",
    "Singing Bowl",
    "Bottled Tornado",
    "TeardropLocket",
    "Bottled Flame",
    "Blue Candle",
    "Sundial",
    "Pear",
    "Gremlin Horn",
  ],
  post_combat: false,
  combo: false,
  relics: [
    "PureWater",
    "Ring of the Snake",
    "Smiling Mask",
    "Paper Frog",
    "Paper Crane",
    "Discerning Monocle",
    "Champion Belt",
    "Nloth's Gift",
    "Black Blood",
    // /// common
    // "Tiny Chest",
    // "Lantern",
    // "Juzu Bracelet",
    // "Dream Catcher",
    // "Bag of Preparation",
    // "Bag of Marbles",
    // /// uncommon
    // "Singing Bowl",
    // "Mummified Hand",
    // "The Courier",
    // /// rare
    // "Prayer Wheel",
    // "Unceasing Top",
    // "Shovel",
    // "Peace Pipe",
    // "Ice Cream",
    // "Dead Branch",
    // "Calipers",
    // /// shop
    // "Membership Card",
    // "Strange Spoon",
    // /// boss
    // "Ring of the Serpent",
    // "Runic Pyramid",
    // "Black Star",

    // "Golden Idol",
    // "Odd Mushroom",
  ],
  rare_relics: [
    "CaptainsWheel",
    "Mango",
    // "Dead Branch",
    // "Ginger",
    // "Shovel",
    "Old Coin",
    "StoneCalendar",
    "FossilizedHelix",
    // "Ice Cream",
    "Thread and Needle",
    // "Peace Pipe",
    "CloakClasp",
    "TungstenRod",
    "Pocketwatch",
    "Gambling Chip",
    // "Turnip",
    // "Prayer Wheel",
    // "Unceasing Top",
    // "Lizard Tail",
    "WingedGreaves",
    "Torii",
    "Du-Vu Doll",
    "Incense Burner",
    // "Calipers",
    "Girya",
    "GoldenEye",
    "Bird Faced Urn",
  ],
  level_name: "Exordium",
  metric_campfire_rested: 0,
  max_orbs: 0,
  boss: "Hexaghost",
  seed: 6282479434097199000,
  metric_current_hp_per_floor: [],
  current_health: 72,
  common_relics: [
    "Strawberry",
    "Regal Pillow",
    "Toy Ornithopter",
    "Centennial Puzzle",
    "Vajra",
    "Potion Belt",
    "Damaru",
    "Orichalcum",
    "Nunchaku",
    "CeramicFish",
    "Pen Nib",
    "Blood Vial",
    "Lantern",
    "War Paint",
    "Happy Flower",
    "MealTicket",
    "Bag of Marbles",
    "Omamori",
    "Anchor",
    "Akabeko",
    "Bronze Scales",
    "Whetstone",
    "MawBank",
    "Ancient Tea Set",
    "Boot",
    "Oddly Smooth Stone",
    "Tiny Chest",
    "Dream Catcher",
    "Art of War",
    "PreservedInsect",
    "Juzu Bracelet",
    "Bag of Preparation",
  ],
  monsters_killed: 0,
  gold: 99,
  neow_bonus: "",
  card_random_seed_count: 0,
  card_seed_count: 10,
  is_daily: true,
  metric_campfire_rituals: 0,
  metric_card_choices: [],
  metric_potions_obtained: [],
  is_final_act_on: false,
  treasure_seed_count: 0,
  metric_event_choices: [],
  current_room: "com.megacrit.cardcrawl.rooms.MonsterRoom",
  has_emerald_key: false,
  boss_relics: [
    "Snecko Eye",
    "Tiny House",
    // "Black Star",
    "Cursed Key",
    "Calling Bell",
    "Runic Dome",
    "Pandora's Box",
    "HolyWater",
    "Empty Cage",
    "Astrolabe",
    // "Sozu",
    // "SacredBark",
    // "Runic Pyramid",
    "SlaversCollar",
    "Philosopher's Stone",
    "Fusion Hammer",
    "Ectoplasm",
    "Velvet Choker",
    "VioletLotus",
    "Busted Crown",
    "Coffee Dripper",
  ],
  blue: 0,
  path_y: [0],
  path_x: [0],
  metric_item_purchase_floors: [],
  gold_gained: 0,
  ascension_level: 0,
  one_time_event_list: [
    "Accursed Blacksmith",
    "Bonfire Elementals",
    "Designer",
    "Duplicator",
    "FaceTrader",
    "Fountain of Cleansing",
    "Knowing Skull",
    "Lab",
    "N'loth",
    "SecretPortal",
    "The Joust",
    "WeMeetAgain",
    "The Woman in Blue",
  ],
  card_random_seed_randomizer: 5,
  metric_campfire_meditates: 0,
  perfect: 0,
  mugged: false,
  metric_build_version: "2022-12-18",
  event_list: [
    "Big Fish",
    "The Cleric",
    "Dead Adventurer",
    "Golden Idol",
    "Golden Wing",
    "World of Goop",
    "Liars Game",
    "Living Wall",
    "Mushrooms",
    "Scrap Ooze",
    "Shining Light",
  ],
  elite_monster_list: [
    "3 Sentries",
    "Lagavulin",
    "3 Sentries",
    "Lagavulin",
    "Gremlin Nob",
    "3 Sentries",
    "Gremlin Nob",
    "Lagavulin",
    "Gremlin Nob",
    "Lagavulin",
  ],
  metric_seed_played: "6282479434097199189",
  red: 3,
  elites3_killed: 0,
  relic_counters: [-1],
  seed_set: false,
  elites2_killed: 0,
  metric_items_purged_floors: [],
  potion_seed_count: 0,
  blights: [],
  elites1_killed: 0,
  overkill: false,
  neow_cost: "",
  metric_floor_reached: 1,
  champions: 0,
  smoked: false,
  spirit_count: 0,
  special_seed: 19351,
  potion_chance: 0,
  shop_relics: [
    "Sling",
    "Lee's Waffle",
    "Frozen Eye",
    // "Membership Card",
    "Medical Kit",
    "Orrery",
    "ClockworkSouvenir",
    "TheAbacus",
    "OrangePellets",
    "Toolbox",
    // "Melange",
    // "Strange Spoon",
    "DollysMirror",
    "PrismaticShard",
    // "Chemical X",
    "HandDrill",
    "Cauldron",
  ],
  custom_mods: [],
  metric_path_taken: ["M"],
  name: "Damon",
  has_ruby_key: false,
  metric_playtime: 9,
  has_sapphire_key: false,
  is_trial: false,
  metric_max_hp_per_floor: [],
  save_date: 1671957290069,
  cards: [
    {
      upgrades: 0,
      misc: 0,
      id: "Strike_P",
    },
    {
      upgrades: 0,
      misc: 0,
      id: "Strike_P",
    },
    {
      upgrades: 0,
      misc: 0,
      id: "Strike_P",
    },
    {
      upgrades: 0,
      misc: 0,
      id: "Strike_P",
    },
    {
      upgrades: 0,
      misc: 0,
      id: "Defend_P",
    },
    {
      upgrades: 0,
      misc: 0,
      id: "Defend_P",
    },
    {
      upgrades: 0,
      misc: 0,
      id: "Defend_P",
    },
    {
      upgrades: 0,
      misc: 0,
      id: "Defend_P",
    },
    {
      upgrades: 0,
      misc: 0,
      id: "Eruption",
    },
    {
      upgrades: 0,
      misc: 0,
      id: "Vigilance",
    },
    {
      upgrades: 0,
      misc: 0,
      id: "Impatience",
    },
    {
      upgrades: 0,
      misc: 0,
      id: "Impatience",
    },
    {
      upgrades: 0,
      misc: 0,
      id: "Impatience",
    },
    {
      upgrades: 0,
      misc: 0,
      id: "Mayhem",
    },
    {
      upgrades: 0,
      misc: 0,
      id: "Mayhem",
    },
    {
      upgrades: 0,
      misc: 0,
      id: "Mayhem",
    },
    {
      upgrades: 0,
      misc: 0,
      id: "Swift Strike",
    },
    {
      upgrades: 0,
      misc: 0,
      id: "Swift Strike",
    },
    {
      upgrades: 0,
      misc: 0,
      id: "Swift Strike",
    },
    {
      upgrades: 0,
      misc: 0,
      id: "Mayhem",
    },
    {
      upgrades: 0,
      misc: 0,
      id: "Mayhem",
    },
    {
      upgrades: 0,
      misc: 0,
      id: "Mayhem",
    },
    {
      upgrades: 0,
      misc: 0,
      id: "Deep Breath",
    },
    {
      upgrades: 0,
      misc: 0,
      id: "Deep Breath",
    },
    {
      upgrades: 0,
      misc: 0,
      id: "Deep Breath",
    },
  ],
  endless_increments: [],
  metric_items_purged: [],
  purgeCost: 75,
  room_x: 0,
  blight_counters: [],
  room_y: 0,
  metric_gold_per_floor: [],
  metric_potions_floor_usage: [],
  boss_list: ["Hexaghost", "Slime Boss", "The Guardian"],
  ai_seed_count: 0,
  event_chances: [0, 0.1, 0.03, 0.02],
  metric_boss_relics: [],
  relic_seed_count: 5,
  act_num: 1,
  metric_damage_taken: [],
  green: 0,
  mystery_machine: 0,
  metric_campfire_upgraded: 0,
  potion_slots: 3,
  chose_neow_reward: false,
  event_seed_count: 0,
  metric_relics_obtained: [],
  daily_date: 19351,
  obtained_cards: {
    Impatience: 1,
    "Swift Strike": 1,
    "Deep Breath": 1,
    Mayhem: 2,
  },
  play_time: 9,
  hand_size: 5,
  max_health: 72,
  monster_seed_count: 35,
  potions: ["Potion Slot", "Potion Slot", "Potion Slot"],
}
