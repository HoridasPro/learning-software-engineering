const sendInvitaion = (...foods: string[]) => {
  foods.forEach((food) => console.log(`Send Invitaion = ${food}`));
};
sendInvitaion("jam", "jamrul", "ata", "anaros", "amrul");
