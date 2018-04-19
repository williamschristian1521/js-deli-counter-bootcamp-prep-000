function takeANumber(katzDeliLine, newPerson)
{
  katzDeliLine.push(newPerson)
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(deliLine)
{
  if (deliLine.length > 0)
  {
    var person = deliLine[0]
    deliLine.shift()
    return `Currently serving ${person}.`
  }
  else
  {
    return 'There is nobody waiting to be served!'
  }
}