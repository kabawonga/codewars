const solution = (mM1, mM2, gM1, gM2, vol, t) =>
	((gM1 / mM1 + gM2 / mM2) * 0.082 * (t + 273.15)) / vol
