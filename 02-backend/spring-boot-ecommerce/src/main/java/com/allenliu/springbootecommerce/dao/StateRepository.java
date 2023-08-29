package com.allenliu.springbootecommerce.dao;

import com.allenliu.springbootecommerce.entity.State;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@RepositoryRestResource
public interface StateRepository extends JpaRepository<State, Integer> {

    // http://localhost:8080/api/states/search/findByCountryCode?code=US
    // This method will find all states for a given country code.
    // The country code is passed in as a parameter.
    List<State> findByCountryCode(@Param("code") String code);

}
