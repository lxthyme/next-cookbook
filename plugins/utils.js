export const logReq = req => {
  console.group('--- REQ ---')
  Object.keys(req).forEach(t => {
    ![
      '_readableState',
      '_maxListeners',
      '_events',
      '_eventsCount',
      '_dumped',
      '_consuming',
      'socket',
      'connection',
      'client',
      'httpVersionMajor',
      'httpVersionMinor',
      'httpVersion',
      'rawHeaders'
    ].includes(t) && console.log(`>>>[${t}]: `, req[t])
  })
  console.log('--- REQ END ---')
  console.groupEnd('--- REQ ---')
}

export const logRes = res => {}
