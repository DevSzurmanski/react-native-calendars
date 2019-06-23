export default function platformStyles(appStyle) {
  return {
    knob: {
      width: 38,
      height: 7,
      marginTop: 10,
      borderRadius: 3,
      backgroundColor: appStyle.agendaKnobColor
    },
    weekdays: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      paddingTop: 15,
      paddingBottom: 15,
      alignItems: "center",
      backgroundColor: appStyle.calendarBackground
    },
    weekdaysWrapper: {
      flexDirection: "row",
      justifyContent: "space-around",
      width: "100%",
      paddingLeft: 15,
      paddingRight: 15
    }
  };
}
