package com.goldenpedia.main.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import com.goldenpedia.main.domain.GoldList;
import com.goldenpedia.main.domain.Word;

public interface GoldListRepository extends CrudRepository<GoldList, Long> {

}
