export let componentStatuses = ['Operational', 'Under Maintenance', 'Degraded Performance', 'Outage']

export let getComponentColor = (status) => {
  switch (status) {
    case 'Operational':
      return '#388e3c'
    case 'Under Maintenance':
      return '#0288d1'
    case 'Degraded Performance':
      return '#ffa000'
    case 'Outage':
      return '#c62828'
    default:
      return '#9e9e9e'
  }
}

export let incidentStatuses = ['Investigating', 'Identified', 'Monitoring', 'Resolved']

export let getIncidentColor = (impact) => {
  switch (impact) {
    case 'Investigating':
      return '#c62828'
    case 'Identified':
      return '#ffa000'
    case 'Monitoring':
      return '#0288d1'
    case 'Resolved':
      return '#388e3c'
    default:
      return '#9e9e9e'
  }
}
