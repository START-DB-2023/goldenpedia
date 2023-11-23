package com.goldenpedia.main;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

class MainApplicationTests {

	@Test
	public void testAdd() {
		assertEquals(42, Integer.sum(19, 23));
	}

}
