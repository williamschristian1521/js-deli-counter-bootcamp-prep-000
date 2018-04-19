function takeANumber(katzDeliLine, newPerson)
{
  katzDeliLine.push(newPerson)
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`
}

function nowServing()
{
  if (katzDeliLine.length > 0)
  {
    var person = katzDeliLine[0]
    katzDeliLine.unshift()
  }
  else
  {
    
  }
}