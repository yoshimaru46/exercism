package booking

import (
	"time"
)

const (
	scheduleLayout string = "1/2/2006 15:04:05"
	calLayout      string = "January 2, 2006 15:04:05"
	noonLayout     string = "Monday, January 2, 2006 15:04:05"
	descLayout     string = "You have an appointment on Monday, January 2, 2006, at 15:04."
)

// NOTE: September 15th in 2012 にオープンした

// Schedule returns a time.Time from a string containing a date.
func Schedule(date string) time.Time {
	t, err := time.Parse(scheduleLayout, date)
	if err != nil {
		panic(err)
	}
	return t
}

// HasPassed returns whether a date has passed.
func HasPassed(date string) bool {
	t, err := time.Parse(calLayout, date)
	if err != nil {
		panic(err)
	}
	return time.Now().After(t)
}

// IsAfternoonAppointment returns whether a time is in the afternoon.
func IsAfternoonAppointment(date string) bool {
	t, err := time.Parse(noonLayout, date)
	if err != nil {
		panic(err)
	}
	hour := t.Hour()
	return hour >= 12 && hour < 18
}

// Description returns a formatted string of the appointment time.
func Description(date string) string {
	return Schedule(date).Format(descLayout)
}

// AnniversaryDate returns a Time with this year's anniversary.
func AnniversaryDate() time.Time {
	return time.Date(time.Now().Year(), time.September, 15, 0, 0, 0, 0, time.UTC)
}
