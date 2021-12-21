# React exercises

## Exercise 1: pomodoro timer

The user enters their timer settings theough a form. This includes:
- work period (minutes)
- break time (minutes)
- number of cycles

There is a state to keep track of these timer settings.

The countdown timer will show values for minutes and seconds which are set to the initial work (or break) minutes entered by the user, but the countdown for minutes and seconds displayed on the screen should be kept track of with an entirely different state. 

```
[minutes, setMinutes] = useState(0)
[seconds, setSeconds] = useState(0)
```
^ These states should be continuously updated each second, but the timersettings state as entered by the user should not be affected by any of this.