import ReactGA from 'react-ga'

/**
 * gaTrackingID: Required. GA Tracking ID like UA-000000-01.
 * options.debug: Optional. If set to true, will output additional feedback to the console.
 * options.titleCase: Optional. Defaults to true. If set to false, strings will not be converted to title case before sending to GA.
 * options.gaOptions: Optional. [GA configurable create only fields](https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference).
 * options.gaAddress: Optional. If you are self-hosting your analytics.js, you can specify the URL for it here.
 * options.alwaysSendToDefaultTracker: Optional. Defaults to true. If set to false and using multiple trackers, the event will not be send to the default tracker.
 * options.testMode: Optional. Defaults to false. Enables test mode. See here for more information.
 * options.standardImplementation: Optional. Defaults to false. Enables loading GA as google expects it. See [here](https://github.com/react-ga/react-ga#standard-implementation) for more information.
 * options.useExistingGa: Optional. Skips call to window.ga(), assuming you have manually run it.
 */
export const initGA = props => {
  const {
    name = 'next-wd',
    titleCase = false,
    alwaysSendToDefaultTracker = true,
    gaOptions = {}
  } = props
  console.log('>>>[initGA]')
  ReactGA.initialize('UA-151913383-3', {
    // debug: process.env.NODE_ENV !== 'production',
    name,
    titleCase,
    /// Boolean. Optional. Defaults to true.
    /// If set to false and using multiple trackers, the event will not be send to the default tracker.
    alwaysSendToDefaultTracker,
    gaOptions: {
      ...gaOptions,
      /// 抽样率
      sampleRate: 100,
      /// 此设置决定以何种频率发送网站速度信标。默认情况下，系统会自动跟踪 1% 的用户。
      siteSpeedSampleRate: 10,
      /// 总是发送引荐来源网址
      alwaysSendReferrer: true
    }
  })
}

/**
 * path: [String] e.g. '/get-involved/other-ways-to-help'
 * trackerNames: [Array] Optional. A list of extra trackers to run the command on
 * title: [String] Optional. e.g. 'Other Ways to Help'
 */
export const logPageView = props => {
  console.log(`>>>[logPageView]: ${window.location.pathname}
  props: ${props}
  `)
  ReactGA.set({
    page: window.location.pathname
  })
  ReactGA.pageview(window.location.pathname)
}

/**
 * modalName: [String] E.g. 'login', 'read-terms-and-conditions'
 */
export const logModalView = props => {
  const { modalName = '' } = props
  console.log(`props: ${props}`)
  ReactGA.modalview(modalName)
}

/**
 * category: Required. A top level category for these events
 * action: Required. A description of the behaviour
 * label: Optional. More precise labelling of the related action
 * value: Optional. A means of recording a numerical value against an event
 * nonInteraction: Optional. If an event is not triggered by a user interaction, but instead by our code
 * transport: Optional. This specifies the transport mechanism with which hits will be sent. Valid values include 'beacon', 'xhr', or 'image'.
 */
export const logEvent = props => {
  const {
    category = '',
    action = '',
    label = '',
    value = 0,
    nonInteraction = true
    // transport = ''
  } = props
  console.log('>>>[logEvent]:', props)
  if (category && action) {
    ReactGA.event({ category, action, value, label, nonInteraction })
  }
}

/**
 * description: Optional. Description of what happened.
 * fatal: Optional. Set to true if it was a fatal exception.
 */
export const logException = (description = '', fatal = false) => {
  console.log(`>>>[logException]-[${fatal}]: `, description)
  if (description) {
    ReactGA.exception({ description, fatal })
  }
}

/**
 * category: Required. A string for categorizing all user timing variables into logical groups
 * variable: Required. Name of the variable being recorded.
 * value: Required. Number of milliseconds elapsed time to report.
 * label: Optional. It can be used to add flexibility in visualizing user timings in the reports.
 *
 * e.g:
 *      ga('send', 'timing', 'JS Libraries', 'load', 20, 'CDN libs');
 *
 *      ReactGA.timing({
 *        category: 'JS Libraries',
 *        variable: 'load',
 *        value: 20, // in milliseconds
 *        label: 'CDN libs'
 *      })
 */
export const logTiming = props => {
  const { category = '', variable = '', value = 0, label = '' } = props
  ReactGA.timing({
    category,
    variable,
    value, // in milliseconds
    label
  })
}
